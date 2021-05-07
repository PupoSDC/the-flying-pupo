import { CMSApp } from '@camberi/firecms';
import React from 'react';
import ReactDOM from 'react-dom';

const navigation: EntityCollectionView<any>[] = [
  {
    relativePath: 'courses',
    schema: courseSchema,
    name: 'Courses',
  },
  {
    relativePath: 'surveys',
    schema: surveySchema,
    name: 'Surveys',
  },
  {
    relativePath: 'categories',
    schema: categorySchema,
    name: 'Categories',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <CMSApp
      name={"The flying pupo CMS"}
      authentication={myAuthenticator}
      navigation={navigation}
      firebaseConfig={firebaseConfig}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
