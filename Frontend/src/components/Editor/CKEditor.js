import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CKE extends React.Component
{
  render()
  {
    return (
      <div>
       <CKEditor editor={ ClassicEditor }
       />
      </div>
    );
  }
};

export default CKE;