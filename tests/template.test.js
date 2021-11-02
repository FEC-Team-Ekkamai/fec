import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure} from 'enzyme';

// import any others components you want to test

/*
 * This template is an example of different tests you can run
 * to test your individual widgets.
 *
 * Jest?
 *   - Testing framework used to test React apps
 *     - Note: Jest is not a library
 *   - Uses snapshot testing (https://jestjs.io/docs/snapshot-testing)
 *     - Useful when you want to ensure UI doesn' change unexpectedly
 *       - how it works:
 *        - renders UI component
 *        - takes a snapshot
 *        - then, compares it to a reference snapshot file
 *        - the test will fail if the two snapshots do not match
 *          - if either:
 *            - the change is unexpected
 *            - the reference snapshot must be updated to a newer version
 *
 * Enzyme?
 * - Testing library to render react components into the DOM
 *   and query the DOM tree
 * - facilitates assertion, manipulation, and traversal of
 *   react component's output
 * - has interface to simply writing unit test
 * - Not a unit testing framework.
 *   - doesn't have a test runner or assertion library
 *
 * Resources:
 *   Jest:
 *     https://jestjs.io
 *     https://jestjs.io/docs/tutorial-react
 *     https://jestjs.io/docs/more-resources
 *     https://github.com/facebook/jest/tree/main/examples
 *     https://jestjs.io/docs/mock-functions
 *     https://jestjs.io/docs/expect
 *
 *   Enzyme:
 *     https://enzymejs.github.io/enzyme/docs/api/
 *     https://enzymejs.github.io/enzyme/docs/api/#api-reference
 */

// ???
configure({adapter: new Adapter()});

// ==================  Snapshot Testing  ==================

/**
 * const App = (props) => (
 *   <div>Hello, World!</div>
 * );
 */
describe('Test Demo', () => {
  it('Renders Hello World', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});


// =================  Testing Structure  ==================
/**
 * Shallow Rendering:
 *   https://enzymejs.github.io/enzyme/docs/api/shallow.html#shallow-rendering-api
 *   - Doesn't require a DOM.
 *   - Useful to test component as a single unit
 *   - asserts tests aren't being asserted on child components
 *     (imagine <li> was a component called 'Books' instead,
 *      shallow rendering would not assert any behavior on
 *      any properties the Books component may have)
 *
 * How the booklist component might look:
 *  const BookList = (props) => (
 *    <div className="book-list">
 *      <ul>
 *        {props.books.map(book => (
 *          <li key={book.isbn}>{book.title}</li>
 *        ))}
 *      </ul>
 *    </div>
 *  );
 */

describe('Booklist', () => {

  let list;

  beforeEach(() => {
    list = shallow(<BookList books={data.books}/>);  // how you would test props
  });

  it('renders a list', () => {
    expect(list.find('div').length).toEqual(1);
    expect(list.find('.book-list').length).toEqual(1);
    expect(list.find('ul').length).toEqual(1);
    expect(list.find('li').length).toEqual(8);
    expect(list.find('li').first().text()).toEqual('Eloquent JavaScript, Third Edition');
  });

});

// ==================  Testing Behavior  ==================

/*
 * A simple form component might look like
 * class Search extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       entry: ''
 *     }
 *     this.handleChange = this.handleChange.bind(this);
 *     this.handleSubmit = this.handleSubmit.bind(this);
 *   }
 *
 *   handleChange(e) {
 *     this.setState({
 *       entry: e.target.value
 *     });
 *   }
 *
 *   handleSubmit(e) {
 *     e.preventDefault();
 *     // some other functionality, like a post request
 *   }
 *
 *   render() {
 *     return (
 *       <form onSubmit={this.handleSubmit}>
 *         <input type='text' onChange={this.handleChange} />
 *         <button>Submit</button>
 *       </form>
 *     );
 *    }
 * };
 */

describe('Search Component', () => {

  let search;
  let onChange;

  // jest.fn is a mock function used for testing
  beforeEach(() => {
    search = shallow(<Search entry={''} onChange={jest.fn()} />);
  });

  it('should render correctly', () => {
    expect(search).toMatchSnapshot();
  });

  it('should render an input tag', () => {
    expect(search.find('input').length).toEqual(1);
  });

  it('defines a button', () => {
    expect(search.find('button')).toBeDefined();
  });

  it('changes state on input', () => {
    search.find('input').simulate('change', {target: {value: 'My new value'}});
    expect(search.state('entry')).toEqual('My new value');
    search.find('input').simulate('change', {target: {value: ''}});
    expect(search.state('entry')).toEqual('');
  });

});