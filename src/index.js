/* eslint-disable @lwc/lwc/no-document-query */
import './shared.js';

import BlogTile from 'ui/blogTile';
import Pagination from 'ui/pagination';

customElements.define('blog-tile', BlogTile.CustomElementConstructor);
customElements.define('ui-pagination', Pagination.CustomElementConstructor);
