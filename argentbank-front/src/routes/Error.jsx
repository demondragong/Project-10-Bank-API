import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  useEffect(() => {
    document.title = 'Page non trouvée - ArgentBank';
  });
  return (
    <main className="main error">
      <h1 className="error__title">404</h1>
      <p className="error__detail">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link-home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}