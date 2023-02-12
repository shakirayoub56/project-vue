import {mount, shallowMount} from "@vue/test-utils"
import moxios from 'moxios'
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";
import notFound from "@/components/notFound.vue";
import Sidebar from "@/dashboard/Sidebar.vue";
import Navbar from "@/dashboard/Navbar.vue";

const {

    createRouterMock,

    injectRouterMock

} = require('vue-router-mock')
describe("HomePage.Vue", () => {

    const router = createRouterMock({})

    beforeEach(() => {

        injectRouterMock(router)

    })

    let wrapper;

    const mockRouter = {

        push: jest.fn()

    }
    const updateWrapper = () => {

        wrapper = mount(HomePage, {

            data() {
                return {
                    loading: true,
                }
            },
            computed: {

                users: jest.fn(),

                displayedPosts: jest.fn(),

            },
            created: jest.fn(),


            global: {

                mocks: {

                    $router: mockRouter,
                    stubs: ['paginate'],

                }
            },
            router
        })

    }
    test("rendering AdminLte Sidebar", () => {
        const wrapper = shallowMount(Sidebar)
        expect(wrapper.findComponent(Sidebar).exists()).toBe(true)

    })
    test("rendering AdminLte Navbar", () => {
        const wrapper = shallowMount(Navbar)
        expect(wrapper.findComponent(Navbar).exists()).toBe(true)

    })
    test('render header', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.findComponent(Header).exists()).toBe(true)
    })
    test('render notFound', () => {
        const wrapper = shallowMount(notFound)
        expect(wrapper.findComponent(notFound).exists()).toBe(true)
    })

    beforeEach(function () {

        updateWrapper();

        moxios.install();

    })

    afterEach(function () {

        moxios.uninstall()

    })

    it('ItemsTodo be mounted', () => {

        expect(wrapper.exists()).toBeTruthy()

    })


})