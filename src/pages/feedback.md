---
title: "Peer Feedback für Fabian"
metaDesc: "Peer Feedback für Fabian zum Ende seiner Probezeit"
layout: "layouts/page.html"
pageHeaderSummary: "Mein Feedback-Gespräch zum Ende meiner Probezeit bei der i22 steht an. Du kannst mich dabei unterstützen, indem Du mir hier Feedback hinterlässt. Ich freue mich auf jede Form von Kritik!"
permalink: "/feedback/index.html"
primaryCTA:
  title: "Danke"
  summary: "Ganz lieben Dank für Dein Feedback und Deine hier investierte Zeit. Das bedeutet mir sehr viel!"
  # buttonText: 'Write me now'
  # buttonUrl: 'mailto:fw@fabianwohlgemuth.de?subject=Contact%20-%20'
---

<form name="feedback" method="POST" netlify-honeypot="lecker-honig"  style="display:flex; flex-direction:column; gap:1.5rem;" data-netlify="true">
  <h2>Schreib' was über mich</h2>
  <label>Was sollte ich beibehalten oder vertiefen?
  <textarea rows="2" style="display:flex; width:100%;" type="text" name="good" required></textarea></label>
  <label>Wo siehst Du bei mir noch Optimierungs-Potenziale?
  <textarea rows="2" style="display:flex; width:100%;" type="text" name="bad" required></textarea></label>
  <label>Was hat Dich bei meiner Arbeit besonders beeindruckt?
  <textarea rows="2" style="display:flex; width:100%;" type="text" name="wow" required></textarea></label>
  <label>Wie beurteilst Du meine (Selbst-)Organisation?
  <textarea rows="2" style="display:flex; width:100%;" type="text" name="org" required></textarea></label>
  <h2>Von 1 (gar nicht) bis 4 (Erwartungen übertroffen): Wie zufrieden bist Du mit:</h2>
  <fieldset>
  <legend>... meiner agilen Arbeitsweise?</legend>
  <label><input type="radio" id="rateAgile1"
    name="agile" value="1" required>
  1</label>
  <label><input type="radio" id="rateAgile2"
    name="agile" value="2" required>
  2</label>
  <label><input type="radio" id="rateAgile3"
    name="agile" value="3" required>
  3</label>
  <label><input type="radio" id="rateAgile4"
    name="agile" value="4" required>
  4</label>
  </fieldset>
  <fieldset>
  <legend>... meiner Eigeninitiative?</legend>
  <label><input type="radio" id="rateInitiative1"
    name="initiative" value="1" required>
  1</label>
  <label><input type="radio" id="rateInitiative2"
    name="initiative" value="2" required>
  2</label>
  <label><input type="radio" id="rateInitiative3"
    name="initiative" value="3" required>
  3</label>
  <label><input type="radio" id="rateInitiative4"
    name="initiative" value="4" required>
  4</label>
  </fieldset>
  <fieldset>
  <legend>... meiner Zuverlässigkeit?</legend>
  <label><input type="radio" id="rateReliability1"
    name="reliability" value="1" required>
  1</label>
  <label><input type="radio" id="rateReliability2"
    name="reliability" value="2" required>
  2</label>
  <label><input type="radio" id="rateReliability3"
    name="reliability" value="3" required>
  3</label>
  <label><input type="radio" id="rateReliability4"
    name="reliability" value="4" required>
  4</label>
  </fieldset>
  <fieldset>
  <legend>... meiner Kommunikation?</legend>
  <label><input type="radio" id="rateCommunication1"
    name="communication" value="1" required>
  1</label>
  <label><input type="radio" id="rateCommunication2"
    name="communication" value="2" required>
  2</label>
  <label><input type="radio" id="rateCommunication3"
    name="communication" value="3" required>
  3</label>
  <label><input type="radio" id="rateCommunication4"
    name="communication" value="4" required>
  4</label>
  </fieldset>
  <fieldset>
  <legend>Wie gut fühlst Du Dich von mir beraten?</legend>
  <label><input type="radio" id="rateConsulting1"
    name="consulting" value="1" required>
  1</label>
  <label><input type="radio" id="rateConsulting2"
    name="consulting" value="2" required>
  2</label>
  <label><input type="radio" id="rateConsulting3"
    name="consulting" value="3" required>
  3</label>
  <label><input type="radio" id="rateConsulting4"
    name="consulting" value="4" required>
  4</label>
  <label><input type="radio" id="rateConsultingNotApplicable"
    name="consulting" value="Not Applicable" required>
  Nicht zutreffend</label>  
  </fieldset>
  <h2>Zum Schluss</h2>
  <label>Was möchtest Du mir noch sagen? (optional)
  <textarea rows="2" style="display: flex; width:100%;" type="text" name="say-it"></textarea></label>
  <label>Möchtest Du mir Deinen Namen verraten? (optional)
  <input style="display: flex; width:100%;" type="text" name="name" /></label>
  <p class="visually-hidden">
  <label>Bist Du ein Mensch? Füll dieses Feld bitte NICHT aus: <input name="lecker-honig" /></label>
  </p>
  <p>
  <button class="button" type="submit">Send</button>
  </p>
</form>
