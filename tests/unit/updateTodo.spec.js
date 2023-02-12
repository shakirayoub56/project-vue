import {mount} from "@vue/test-utils";

import updateTodo from "@/components/updateTodo.vue";

import moxios from "moxios";

import sinon from "sinon";

import axios from "axios";

import {equal} from "assert";

const {

    createRouterMock,

    injectRouterMock

} = require('vue-router-mock')


describe('updateTodo.vue', () => {

    let wrapper;

    const mockRouter={

        push: jest.fn()

    }

    const router = createRouterMock({})

    beforeEach(() => {

        injectRouterMock(router)

    })
    const updateWrapper = () => {

        wrapper = mount(updateTodo, {

            global: {

                mocks: {

                    $router: mockRouter,
                    loading: false,
                }

            },
            data() {
                return {
                    loading: false
                }
            },

            created: jest.fn(),

            router: jest.fn(),

            stubs: ['router-link', 'required', 'loading']

        })

    }


    test('UpdateTodo be mounted', async () => {

        await expect(wrapper.exists()).toBeTruthy()

    })

    test('route params id', async () => {

        const id = 1

        expect(wrapper.exists(id)).toBe(true);

    });

    beforeEach(function () {

        moxios.install()

        updateWrapper();

    })

    afterEach(function () {

        moxios.uninstall()

    })

    test('testing for the post', async () => {

        // wrapper.vm.updateTodo()

        expect(wrapper.findAll('button').at(0).trigger("click"))

        moxios.withMock(() => {

            wrapper = sinon.spy()

            axios.get('http://localhost:3000/todolist/')

            moxios.wait(() => {

                let request = moxios.requests.mostRecent()

                request.respondWith({

                    status: 200,

                    response: {

                        title: 'title1', body: 'body1'

                    }

                })

                    .then(() => {

                        equal(wrapper.called, true)

                    })

            })

        })

    })

    // test('testing the input', async () => {
    //
    //     expect(wrapper.findAll('input').length).toEqual(1)
    //     expect(wrapper.findAll('input').at(0).text()).toMatch('')
    //
    //
    // })

    test('testing the input field', async () => {
        expect(wrapper.findAll('input').length).toEqual(1)
        expect(wrapper.findAll('input').at(0).text()).toMatch('')
    })

    test('testing the button ',async()=>{
        expect(wrapper.findAll('button').length).toEqual(2)
        expect(wrapper.findAll('button').at(0).text()).toMatch('Cancel')
        expect(wrapper.findAll('button').at(1).text()).toMatch('Update')

    })
    test('post id fetching ', async () => {
        moxios.withMock(() => {

            wrapper = sinon.spy()

            moxios.wait(() => {

                let request = moxios.requests.mostRecent()

                request.respondWith({

                    status: 200,

                    response: {

                        id: 1, title: 'title1'

                    }

                })

                    .then(() => {

                        equal(wrapper.called, true)

                    })

            })
        })
    })


});