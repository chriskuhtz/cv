const Projects = () => {
  return (
    <div>
      <h2>Meine Projekte und Kurse</h2>
      <ul>
        <li>
          <h3>Pokemon Micro Frontends</h3>
          <p>Github Link</p>
          <p>
            In diesem Projekt entwickle ich ein klassisches Nintendo Pokemon
            Spiel als Micro Frontend Architektur. Ich habe Teilkomponenten des
            Spiels (z.B. Item Tasche, Overworld View, Battle View) in einzelne
            React Apps gegliedert, die von einer Haupt App importiert werden
            können. Diese Architekur erlaubt es mir, einzelne Teile des Projekts
            separat zu deployen, oder sie in verschiedenen "Haupt Apps"
            gleichzeitig zu benutzen
          </p>
        </li>
        <li>
          <h3>Full Stack Open U of Helsinki</h3>
          <p>
            <a href="https://fullstackopen.com/en/">
              https://fullstackopen.com/en/
            </a>
          </p>
          <p>
            Mit diesem kostenlosen Kurs (mit bewerteten Übungen) der Universität
            von Helsinki vertiefe ich im Moment mein Wissen über Full Stack
            Development. Besonders möchte ich mehr strukturierte Frontend
            Backend Kommunikation und GraphQL Datenbanken lernen.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
