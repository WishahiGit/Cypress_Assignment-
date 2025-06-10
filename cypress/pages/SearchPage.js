import BasePage from './BasePage';

export class SearchPage extends BasePage {
  SEARCH_BOX = '#twotabsearchtextbox';
  SEARCH_BUTTON = '#nav-search-submit-button';
  SEARCH_RESULT_VALIDATOR = 'span.a-color-state.a-text-bold';

  searchForItem(item) {
    this.fillText(this.SEARCH_BOX, item);
    this.click(this.SEARCH_BUTTON);
    this.isVisible(this.SEARCH_RESULT_VALIDATOR);
    this.validateText(this.SEARCH_RESULT_VALIDATOR, item);
  }
}
