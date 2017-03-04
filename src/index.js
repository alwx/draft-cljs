import createEditorStateWithTextFn from './utils/createEditorStateWithText';
import composeDecoratorsFn from './utils/composeDecorators';
import linkComponentGenerateFn from './utils/linkComponent';

// eslint-disable-next-line import/no-named-as-default
export default from './Editor';
export const createEditorStateWithText = createEditorStateWithTextFn;
export const composeDecorators = composeDecoratorsFn;
export const linkComponentGenerate = linkComponentGenerateFn;