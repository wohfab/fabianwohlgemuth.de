---
title: Data Journalism - COVID-19
date: 2020-03-24
description: Datenanalyse mit Python Pandas, auf den COVID-19 Daten des ECDC.
tags:
  - code
  - uni
  - data analysis
  - python
  - pandas
  - COVID-19
  - de
---

The following project is documented in German. You can find the [interactive project with all plots and maps](https://wohfab.github.io/datajournalism) and the [source code](https://github.com/wohfab/datajournalism) on GitHub.

---

## Projektbeschreibung

Das vorliegende Projekt zeigt die datenjournalistische Arbeit von der Datenbeschaffung über ihre Reinigung, Aufwertung und Analyse bis hin zur Darstellung geeigneter Plots, die eine Übersicht über die Daten geben können.

Der Aktualität wegen, habe ich mich bei dem Datensatz für Daten zum Virus COVID-19 entschieden. Im Laufe des Projektes werden die Daten aufgearbeitet und mithilfe von Plots für das einfache Verständnis dargestellt.

## Vorraussetzungen zur Ausführung

Die Programme, die zur Ausführung des Jupyter Notebooks (`.ipynb`) notwendig sind, befinden sich in der Textdatei `requirements.md` und lassen sich über den folgenden Befehl per `pip3` installieren.

`pip3 install -r requirements.md`

## Paket-Import

Für die Ausführung des Projektes benötigen wir folgende Python-Pakete:

- `pandas`, um den Typ `DataFrame` zu nutzen und unsere tabellarischen Daten zu verarbeiten.
- `plotly`, um die Daten auf einer Landkarte darzustellen.
- `urllib.requests`, um die aktuellsten Zahlen herunterzuladen.
- `datetime`, um das heutige Datum herauszufinden.


```python
## dataframes
import pandas as pd

## plotting
import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots

## data download
import urllib.request
from datetime import datetime, timedelta, date
```

## Konstanten


```python
## constants to be used through out the project
DATE_TODAY = datetime.date(datetime.now())
DATE_YESTERDAY = DATE_TODAY - timedelta(days=1)
DATE_LAST_CHECKED = date(2020, 3, 21)

SOURCE_URL = 'https://www.ecdc.europa.eu/sites/default/files/documents/'
SOURCE_FILENAME = 'COVID-19-geographic-disbtribution-worldwide-{}'
SOURCE_FILETYPE = '.xlsx'

COLOR_CASES = 'mediumseagreen'
COLOR_DEATHS = 'indianred'
COLOR_RATIO = 'darkturquoise'

SCALE_CASES = "Mint"
SCALE_DEATHS = "Burg"
SCALE_RATIO = "Teal"

DIR_ASSETS = 'assets/'
```

## Datensatz

### Beschaffung

#### Quelle

Der Datensatz ist den Zahlen des **ECDC - European Centre for Disease Prevention and Control** ([Website](https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide)) entnommmen.

#### Automatisierung

Die Daten befinden sich auf der Website des ECDC im `.xlsx`-Format. Zunächst wird die Datei heruntergeladen und im Ordner `assets/` gesichert. Dabei versuchen wir, die Daten von Heute herunterzuladen. Sollten diese (noch) nicht verfügbar sein, werden die Daten vom gestrigen Tag heruntergeladen. Wenn auch diese nicht verfügbar sind, findet ein Fallback statt auf die letzte händisch heruntergeladene und geprüfte Datei vom `21.03.2020`.

Nach dem Versuch, die Tagesaktuellen Zahlen herunterzuladen, wird die Variable `data_file` auf die aktuellste Datei festgelegt.


```python
def get_data(filetype=SOURCE_FILETYPE):
    """
    Getting data downloaded from the given source (ECDC)
    
    filetype: .xlsx (.csv became available later but is not yet incorporated into the project)
    
    returns: File
    """
    
    try:
        url_today = SOURCE_FILENAME.format(DATE_TODAY) + filetype
        url = SOURCE_URL + url_today

        urllib.request.urlretrieve(url, DIR_ASSETS + url_today)
        url_file = url_today
        date_used = DATE_TODAY
    except:
        try:
            url_yesterday = SOURCE_FILENAME.format(DATE_YESTERDAY) + filetype
            url = SOURCE_URL + url_yesterday

            urllib.request.urlretrieve(url, DIR_ASSETS + url_yesterday)
            url_file = url_yesterday
            date_used = DATE_YESTERDAY
        except:
            url_file = SOURCE_FILENAME.format(DATE_LAST_CHECKED) + filetype
            date_used = DATE_LAST_CHECKED
    finally:
        data_file = url_file
        print('Genutzte Datei:\n' + data_file)
    return data_file, date_used

## save file into variable
data_file, date_used = get_data()
```

    Genutzte Datei:
    COVID-19-geographic-disbtribution-worldwide-2020-03-25.xlsx


Im Anschluss wird die Datei über `pandas` eingelesen und als `DataFrame`-Objekt gespeichert, damit wir die Daten tabellarisch auswerten können. Bevor wir Änderungen an den Daten vornehmen, werden wir diese in einer weiteren Variable zwischenspeichern. Auf diese Art und Weise können wir auch nach Veränderungen immer auf die Ausgangsdaten zurückgreifen, um etwaige Fehler zu finden.


```python
def read_data(directory=DIR_ASSETS, data_file=data_file):
    """
    Reading given file from directory into a Pandas DataFrame Object
    
    directory: Relative Path to directory of the file
    data_file: File name
    
    returns: Two identical DataFrames. One for manipulation and one one for the raw data.
    """
    data = pd.read_excel(directory + data_file)
    data_raw = data
    return data, data_raw

## create DataFrames from file
data, data_raw = read_data()
```

### Reinigung

#### Sichtung & Grundgerüst

Um die Befehle für das weitere Projekt etwas zu vereinfachen, ändern wir den Namen der Spalte `Countries and territories`.


```python
## renaming columns
data = data.rename(columns={"Countries and territories": "Area"})
```

Dann lassen wir uns mögliche "Fehler" in unserem Datensatz ausgeben. Da ein entscheidender Teil des Projektes auf die Richtigkeit der Länder-Codes im Datendatz baut, prüfen wir, welche der gesetzten Codes womöglich nicht in unser System passen.

Dazu erstellen wir eine Menge der Länder-Codes und lassen uns diese -und die dazugehörigen `Area`-Namen- ausgeben, die *nicht* zweistellig sind.


```python
def show_unique_values(value='GeoId', data=data, print_values=False):
    """
    Listing unique values, given a dataset and the value name.
    
    value: Value that should be listed
    data: dataset (Pandas DataFrame)
    print_values: Boolean; if true, value list is created and printed out
    
    returns: Array of unique values
    """
    values = data[value].unique()
    if print_values:
        print('Unique values of column "' + value + '": ' + str(len(values)))
        print(values)
    return values

## get unique GeoIds
geo_ids = show_unique_values()

## check for GeoIds that are not 2 characters long
for area in data['Area'][data['GeoId'].str.len() != 2].unique():
    print(data['GeoId'][data['Area'] == area].unique()[0], '-', area)
```

    JPG11668 - Cases_on_an_international_conveyance_Japan
    PYF - French_Polynesia
    nan - Namibia


#### Bereinigung

Wirft man einen Blick auf diese Einträge, stellt man fest, dass für *Namibia* keine Einträge in der `GeoId` vorhanden sind (`nan`), *French_Polynesia* bereits einen dreistelligen Länder-Code eingetragen hat und *Cases_on_an_international_conveyance_Japan* eine spezielle achtstellige `GeoId` zugewiesen bekommen hat.

Über eine kurze Recherche lässt sich schnell herausfinden, dass der `Alpha-3`-Code für *Namibia* `NAM` ist. Bei *Cases_on_an_international_conveyance_Japan* handelt es sich um das Passagier-Schiff *Diamond Princess*, welches vor dem Hafen von Yokohama in Japan liegt/lag und in den Daten nicht zu Japans Fällen dazugezählt wird.

Die Einträge zur *Diamond Princess* werden wir beibehalten. Sie werden auf späteren Weltkarten nicht angezeigt, da sie keinen dreistelligen Länder-Code haben. Auf diese Weise können die Zahlen dennoch in die statistischen Berechnungen einfließen.

Für Namibia können wir den entsprechenden Länder-Code in die `GeoId`-Spalte einfügen.


```python
## change Namibia's GeoId from 'nan' to 'NA'
data.replace('nan', 'NA', inplace=True)
```

### Aufbereitung

#### Datum als Zeichenkette

Die Datumsspalte `DateRep` ist vom Format `timestamp`. Für einige Plots benötigen wir das Datum als Zeichenkette, weshalb wir eine weitere Spalte `Date` hinzufügen.


```python
data['Date'] = data['DateRep'].dt.strftime('%Y-%m-%d')
```

#### GeoIds nach ISO3166 Alpha-3

Um die Daten im späteren Verlauf per `plotly` auf einer Weltkarte darstellen zu können, benötigen wir Länder-Codes im Format `ISO3166 Alpha-3`. Die `GeoId` aus den vorhanden Daten nutzt jedoch `ISO3166 Alpha-2`, weshalb wir eine weitere Spalte zu unseren Daten hinzufügen werden, die die entsprechenden Codes enthält. Hier bedienen wir uns einer [Liste](assets/iso3166.csv), die sowohl `Alpha-2`- als auch `Alpha-3`-Codes enthält.


```python
## read ISO3166 CSV file
iso3166 = pd.read_csv('assets/iso3166.csv')

## generate ISO3166 Alpha-3 codes from CSV file
data['GeoId3'] = data['GeoId'].replace(iso3166.set_index('ISO3166-ALPHA-2')['ISO3166-ALPHA-3'])
```

#### Generierung von zusätzlichen Daten

##### Kumulierte Zahlen

Die vorliegenden Zahlen sind aufgeschlüsselt nach Tagen. Um Verläufe zu plotten, benötigen wir kumulierte Zahlen. Diese werden im Folgenden errechnet.

Außerdem erstellen wir ebenfalls eine Spalte mit dem Verhältnis von Todesfall- zu Infiziertenzahlen.


```python
## creating columns for cumulated sums
data['CumCases'] = data.sort_values(by='Date').groupby('GeoId3')['Cases'].cumsum()
data['CumDeaths'] = data.sort_values(by='Date').groupby('GeoId3')['Deaths'].cumsum()

## creating column for death:case ratio
data['CumRatio'] = data['Deaths'] / data['Cases'] * 100
```

#### Sub-Sets

Für die Darstellung der Gesamtsummen, erstellen wir ein Sub-Set unseres Datensatzes, welches die Infizierten- und Todesfallzahlen summiert, nach Land gruppiert, auflistet.

Zusätzlich erstellen wir ein weiteres Sub-Set, welches die summierten Daten absteigend nach Fallzahlen sortiert und und die "Top"-Einträge speichert. Da wir ansonsten eine sehr hohe Varianz haben, ließen sich keine sinnigen Box-Plots generieren.


```python
## cases and deaths summarized
data_sum = data.groupby(['GeoId3', "Area"], as_index=False).sum()[['GeoId3', 'Area', 'Cases', 'Deaths']]

## sorted by date
data_date = data.sort_values('Date')

## countries with the highest numbers of cases and deaths, limited to 15 countries
data_sum_top_c = data_sum.sort_values('Cases', ascending=False).head(15)
data_sum_top_d = data_sum.sort_values('Deaths', ascending=False).head(15)
```

Im Anschluss werden auch für die Sub-Sets Spalten für das Verhältnis angelegt.


```python
data_sum['Ratio'] = data_sum['Deaths'] / data_sum['Cases'] * 100
data_sum_top_c['Ratio'] = data_sum_top_c['Deaths'] / data_sum_top_c['Cases'] * 100
data_sum_top_d['Ratio'] = data_sum_top_d['Deaths'] / data_sum_top_d['Cases'] * 100
```

Die folgende Hilfsfunktion macht es einfacher, Sub-Sets für Länder anzulegen. Als Beispiel für das Projekt, legen wir hier *Deutschland* fest.


```python
def data_subset_country(geoid3):
    return data[data.GeoId3 == geoid3].reset_index(drop=True)

data_deu = data_subset_country("DEU")
```

## Anwendung

Für die Erstellung der Grafiken erstellen wir im Folgenden eine Funktion, die nach Art der Grafik und der dargestellten Daten ein entsprechendes Layout generiert, welches die Beschriftung der Graphen übernimmt.

Dies machen wir, damit wir nicht für jeden Plot ein extra Layout erstellen müssen und sich so Code unnötig vielfach kopieren lassen muss.


```python
def build_layout(plot_type, plot_value, date=date_used, plot_map=False):      
    
    if plot_value == 'Cases':
        title_value = 'Infizierte'
        axis_value = 'Infizierte'
    elif plot_value == 'Deaths':
        title_value = 'Tode'
        axis_value = 'Tode'
    elif plot_value == 'Ratio':
        title_value = 'Verhältnis - Tode zu Infizierte'
        axis_value = 'Verhältnis in %'
    elif plot_value == 'CasesDeaths':
        title_value = 'Infizierte und Tode'
        axis_value = 'Infizierte und Tode'
    
    if plot_type == 'verteilung':
        title_type = title_value
    elif plot_type == 'verlauf':
        title_type = title_value  
    elif plot_type == 'gesamt':
        if plot_value == 'Ratio':
            title_type = title_value + ' - sortiert nach Infizierten'
        else:
            title_type = 'Anzahl - {}'.format(title_value)
    
    subtitle = 'Stand: {}'.format(date.strftime('%d.%m.%Y'))
       
    layout = go.Layout(
            title=title_type,
            title_x=.5,
            yaxis_title=axis_value,
            font=dict(
                family="Courier New, monospace",
                size=16,
                color="#333333"
            ),
            annotations = [dict(xref='paper', yref='paper', x=1, y=-0.14, showarrow=False, text=subtitle)]
        )
    
    if plot_map:
        colorbar = dict(title=axis_value)
        return layout, colorbar
    else:
        return layout
```

### Statistik

#### Boxplot


```python
def plot_boxplot(plot_value, data=data_sum, width=600, date=date_used, plot_type='verteilung'): 
    fig = px.box(data, y=plot_value, points="all", hover_name="Area", 
                 color_discrete_sequence = px.colors.colorbrewer.Paired, width=width)

    fig.update_layout(build_layout(plot_type, plot_value, date))
    fig.show()
```

##### Verteilung der Infiziertenzahlen


```python
plot_boxplot(plot_value='Cases', data=data_sum_top_c)
```


##### Verteilung der Todeszahlen


```python
plot_boxplot(plot_value='Deaths', data=data_sum_top_d)
```

##### Verteilung des Verhältnisses zwischen Todes- und Infiziertenzahlen


```python
plot_boxplot(plot_value='Ratio')
```


#### Balkendiagramm


```python
def plot_bar_horizontal(data=data_sum, sort=True, limit=15, ratio=False, date=date_used, plot_type='gesamt'):
    """
    Plot horizon bar graph
    
    data: dataset
    sort: Boolean; sort by cases
    limit: int; number of countries to show
    ratio: Boolean; if True, instead of cases and deaths, ratio will be plotted
    """
    
    
    if sort:
        if limit:
            data = data.sort_values('Cases').tail(limit)
        else:
            data = data.sort_values('Cases')
            
    fig = go.Figure()
    
    ## add cases
    fig.add_trace(go.Bar(
        y=data['Cases'],
        x=data['GeoId3'],
        orientation='v',
        name='Infizierte',
        marker_color=COLOR_CASES))
    
    ## add deaths
    fig.add_trace(go.Bar(
        y=data['Deaths'],
        x=data['GeoId3'],
        orientation='v',
        name='Tode',
        marker_color=COLOR_DEATHS))
     
    fig.update_layout(barmode='group')

    if ratio:
        fig = go.Figure()
        
        ## add ratio
        fig.add_trace(go.Bar(
            y=data['Ratio'],
            x=data['GeoId3'],
            orientation='v',
            name='Verhältnis',
            marker_color=COLOR_RATIO,
            hoverinfo='x+y'))
        texttemplate='%{y:.2f}'
        
        fig.update_yaxes(range=[0, 12])
    else:
        texttemplate='%{y:.2s}'
        
    plot_value = 'CasesDeaths' if not ratio else 'Ratio' 
    fig.update_layout(build_layout(plot_type, plot_value, date))
    
    fig.update_traces(texttemplate=texttemplate, textposition='outside')
    fig.update_layout(uniformtext_minsize=10, uniformtext_mode='show')
    
    fig.show()
```

##### Bestätigte Infizierten- und Todesfälle


```python
plot_bar_horizontal()
```


##### Verhältnis zwischen Todes- und Infiziertenzahlen in %

Sortiert sind die Daten dennoch nach Infiziertenzahlen und nicht nach dem Verhältnis, da hier besonders schön deutlich wird, dass die Infiziertenzahlen nicht in jedem Land gleich mit dem Verhältnis zu den Todenzahlen korrelieren.


```python
plot_bar_horizontal(ratio=True)
```


### Verläufe

#### Liniendiagramm


```python
def plot_line(data, date=date_used):    
    fig = make_subplots(rows=2, cols=1)

    fig.add_trace(
        go.Scatter(x=data['DateRep'], y=data['CumCases'], name="Infizierte", marker_color=COLOR_CASES), 
        row=1, col=1,)

    fig.add_trace(
        go.Scatter(x=data['DateRep'], y=data['CumDeaths'], name="Tode", marker_color=COLOR_DEATHS), 
        row=2, col=1)
    
    fig.update_layout(build_layout(date=date, plot_type='verlauf', plot_value='CasesDeaths'))
    
    fig.show()
```

##### Verlauf der Infizierten- und Todesfälle in Deutschland


```python
plot_line(data_subset_country('DEU'))
```

### Karten


```python
def plot_map(trend=True, plot_value='Cases', date=date_used):
    if plot_value == 'Cases':
        color_trend = 'CumCases'
        color_static = 'Cases'
        color_scale = SCALE_CASES
    elif plot_value == 'Deaths':
        color_trend = 'CumDeaths'
        color_static = 'Deaths'
        color_scale = SCALE_DEATHS
    else:
        color_trend = 'CumRatio'
        color_static = 'Ratio'
        color_scale = SCALE_RATIO
    
    if trend:
        fig = px.choropleth(data_date,
                            locations='GeoId3', 
                            hover_name='Area', 
                            animation_frame='Date', 
                            color=color_trend,
                            color_continuous_scale=color_scale)
        plot_type = 'verlauf'
    else:
        fig = px.choropleth(data_sum,
                            locations='GeoId3', 
                            hover_name='Area',
                            color=color_static,
                            color_continuous_scale=color_scale)
        plot_type = 'gesamt'
        
    layout = build_layout(date=date, plot_type=plot_type, plot_value=plot_value, plot_map=True)
    fig.update_layout(layout[0])
    fig.update_layout(coloraxis_colorbar=layout[1])

    fig.show()
```

#### Statische Karten

##### Gesamtzahlen der Infizierten


```python
plot_map(trend=False)
```

##### Gesamtzahlen der Todesfälle


```python
plot_map(trend=False, plot_value='Deaths')
```


#####  Gesamtzahlen des Verhältnisses zwischen Todesfällen und Infizierten in %


```python
plot_map(trend=False, plot_value='Ratio')
```



#### Verlaufs-Karten mit Zeitstrahl

Die Verlaufs-Karten beginnen mit dem frühsten Eintrag der Daten. Daher ist über die Karte bis zu den Einträgen von März nur wenig Bewegung. Da wir dennoch ein unverfälschtes Bild auf den Datensatz gewähren wollen, werden die Daten weiterhin angezeigt.

##### Verlauf der Infiziertenzahlen


```python
plot_map()
```

##### Verlauf der Todeszahlen


```python
plot_map(plot_value='Deaths')
```



## Ausblick

Möglichkeiten, das Projekt zu erweitern:

- Der Datensatz des ECDC beschränkt sich auf wesentliche geografische Informationen. Eine Aufschlüsselung in kleinere geografische Einheiten war mir nicht möglich. Das Robert-Koch-Institut besitzt solche Daten, macht diese jedoch nicht für die Allgemeinheit zugänglich. 
- Außerdem wäre interessant, ein Datensatz zu nutzen, der über die geografischen Daten hinaus auch Personendaten umfasst. Dabei ist das Alter der PatientInnen vermutlich besonders interessant.
