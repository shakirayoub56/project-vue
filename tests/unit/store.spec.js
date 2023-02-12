import axios from 'axios';
import store from "@/store";

jest.mock('axios')
describe('fetchTodos', () => {
    it('fetches todos from the API and commits them to the store', async () => {
        // mock the axios.get method
        axios.get = jest.fn(() => Promise.resolve({data: [{id: 1, title: 'Todo 1'}]}));

        // calling the action here
        await store.dispatch('fetchTodos');

        // assert that axios.get was called with the correct url
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/todolist');

        // assert that the correct mutation was committed
        expect(store.state.todos).toEqual([{id: 1, title: 'Todo 1'}]);
    });
});
describe('allTodos', () => {
    it('returns all todos', () => {
        store.state.todos = [{id: 1, title: 'Todo 1'}, {id: 2, title: 'Todo 2'}];
        expect(store.getters.allTodos).toEqual([{id: 1, title: 'Todo 1'}, {id: 2, title: 'Todo 2'}]);
    });

});
// delete todo
// it('should delete todo', async () => {
//     const id = 1
//     axios.delete.mockResolvedValue({ data: {} })
//     state.todos = [{ id: 1, title: 'Test todo', completed: false }]
//
//     await store.dispatch('deleteTodo', id)
//
//     expect(axios.delete).toHaveBeenCalledWith(`http://localhost:3000/todolist/${id}`)
//     expect(store.state.todos).toEqual([])
// });
// add todo
// test('add todo', async () => {
//     // mock the axios post method
//     axios.post = jest.fn(() => Promise.resolve({data: {id: 1, title: 'Test Todo', completed: false}}));
//
//     // set the initial state of the todos
//     store.state.todos = [];
//
//     // dispatch the addTodo action with a title of 'Test Todo'
//     await store.dispatch('addTodo', 'Test Todo');
//
//     // assert that the axios post method was called with the correct url and data
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/todolist/', {title: 'Test Todo', completed: false});
// })
describe('addTodo', () => {
    it('should add a todo and add it to the state', async () => {
        // Arrange
        const todoTitle = 'New Todo';
        const newTodo = {id: 3, title: 'New Todo', completed: false};
        // set up initial state
        store.state.todos = [{id: 1, title: 'Test Todo 1', completed: false}, {
            id: 2,
            title: 'Test Todo 2',
            completed: true
        }];
        // mock the axios.post call to return a fake response
        axios.post.mockResolvedValue({data: newTodo});

        // Act
        // call the addTodo action with the title of the new todo
        await store.dispatch('addTodo', todoTitle);

        // Assert
        // assert that the new todo was added to the state
        expect(store.state.todos).toEqual([newTodo, {id: 1, title: 'Test Todo 1', completed: false}, {
            id: 2,
            title: 'Test Todo 2',
            completed: true
        }]);
    });
});
describe('deleteTodo', () => {
    it('should delete a todo and remove it from the state', async () => {
        // Arrange
        const todoId = 1;
        // set up initial state
        store.state.todos = [{id: 1, title: 'Test Todo 1', completed: false}, {
            id: 2,
            title: 'Test Todo 2',
            completed: true
        }];
        // mock the axios.delete call to return a fake response

        axios.delete.mockResolvedValue({});

        // Act
        // call the deleteTodo action with the id of the todo to delete
        await store.dispatch('deleteTodo', todoId);

        // Assert
        // assert that the todo with id 1 was removed from the state
        expect(store.state.todos).toEqual([{id: 2, title: 'Test Todo 2', completed: true}]);
    });
});

