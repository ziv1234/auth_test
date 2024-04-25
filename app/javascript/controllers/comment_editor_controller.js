import { Controller } from "@hotwired/stimulus"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Connects to data-controller="comment-editor"
export default class extends Controller {
  connect() {
    ClassicEditor.create(this.element, {
      toolbar: {
        items: [
          'undo',
          'redo',
          '|',
          'bold',
          'italic',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'outdent',
          'indent',
          '|',
          'blockQuote',
          'insertTable',
          'link'
        ]
      },
      language: 'en',
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
        ]
      }
    });
  }
}
