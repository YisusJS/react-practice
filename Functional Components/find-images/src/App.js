import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './header.css';
import './content.css';
import './article.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url) => window.open(url);

  const checkDescriptions = (description, altDescription) => {
    if (description && altDescription) {
      return (
        `${description} - ${altDescription}`.charAt(0).toUpperCase() +
        `${description} - ${altDescription}`.slice(1)
      );
    } else {
      if (description) {
        return description.charAt(0).toUpperCase() + description.slice(1);
      } else if (altDescription) {
        return altDescription.charAt(0).toUpperCase() + altDescription.slice(1);
      } else {
        return '';
      }
    }
  };
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async ({ search }) => {
            const URL = `https://api.unsplash.com/search/photos?per_page=20&query=${search}`;
            // llamar a la api de unsplash
            const response = await fetch(URL, {
              headers: {
                Authorization: `Client-ID -SUr9aXTPN8HNSMJfhkJ4V0MjMEDUH0gNAh0EzfEBJQ`,
              },
              method: 'GET',
            });
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field placeholder="Gatitos" name="search" type="text" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map((photo) => (
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} alt={photo.alt_description} />
              <p>
                {checkDescriptions(photo.description, photo.alt_description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
