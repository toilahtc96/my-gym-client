import { createRouter, createWebHistory } from 'vue-router'


const customerRoutes = [{
    path: "/",
    component: () =>
        import("../views/homepageV1.vue"),
}
    // ,
    // {
    //     path: "/index-1", // jarb hada f to
    //     name: "homepageOne",
    //     component: () =>
    //         import("../views/homepageV1.vue"),
    // },

    // {
    //     path: "/index-2",
    //     name: "homepageTwo",
    //     component: () =>
    //         import("../views/homepageV2.vue"),

    // },

    // {
    //     path: "/index-3",
    //     name: "homepageThree",
    //     component: () =>
    //         import("../views/homepageV3"),

    // },

    // {
    //     path: "/about-us",
    //     name: "about-us",
    //     component: () =>
    //         import("../views/pages/about-us.vue"),
    // },

    // {
    //     path: "/services",
    //     name: "services",
    //     component: () =>
    //         import("../views/pages/services.vue"),
    // },

    // {
    //     path: "/pricing",
    //     name: "pricing",
    //     component: () =>
    //         import("../views/pages/pricing.vue"),
    // },

    // {
    //     path: "/faq",
    //     name: "faq",
    //     component: () =>
    //         import("../views/pages/faq.vue"),
    // },

    // {
    //     path: "/404",
    //     name: "404",
    //     component: () =>
    //         import("../views/pages/404.vue"),
    // },

    // {
    //     path: "/schedule",
    //     name: "schedule",
    //     component: () =>
    //         import("../views/classes/ClassSchedule.vue"),
    // },

    // {
    //     path: "/class-grid",
    //     name: "class-grid",
    //     component: () =>
    //         import("../views/classes/class-grid.vue"),
    // },

    // {
    //     path: "/class-details",
    //     name: "class-details",
    //     component: () =>
    //         import("../views/classes/class-details.vue"),
    // },

    // {
    //     path: "/team",
    //     name: "team",
    //     component: () =>
    //         import("../views/trainer/team.vue"),
    // },

    // {
    //     path: "/team-single",
    //     name: "team-single",
    //     component: () =>
    //         import("../views/trainer/teamSingle.vue"),
    // },

    // {
    //     path: "/events",
    //     name: "events",
    //     component: () =>
    //         import("../views/events/events.vue"),
    // },

    // {
    //     path: "/event-details",
    //     name: "event-details",
    //     component: () =>
    //         import("../views/events/event-details.vue"),
    // },

    // {
    //     path: "/blog-2-column",
    //     name: "blog-2-column",
    //     component: () =>
    //         import("../views/blog/blog-2-column.vue"),
    // },

    // {
    //     path: "/blog-3-column",
    //     name: "blog-3-column",
    //     component: () =>
    //         import("../views/blog/blog-3-column.vue"),
    // },

    // {
    //     path: "/blog-sidebar",
    //     name: "blog-sidebar",
    //     component: () =>
    //         import("../views/blog/blog-sidebar.vue"),
    // },

    // {
    //     path: "/blog-sidebar-left-2-column",
    //     name: "blog-sidebar-left-2-column",
    //     component: () =>
    //         import("../views/blog/blog-sidebar-left-2-column.vue"),
    // },

    // {
    //     path: "/blog-sidebar-right-2-column",
    //     name: "blog-sidebar-right-2-column",
    //     component: () =>
    //         import("../views/blog/blog-sidebar-right-2-column.vue"),
    // },

    // {
    //     path: "/blog-single",
    //     name: "blog-single",
    //     component: () =>
    //         import("../views/blog/blog-single.vue"),
    // },

    // {
    //     path: "/contact-us",
    //     name: "contact-us.vue",
    //     component: () =>
    //         import("../views/contact/contact-us.vue"),
    // },
];

const adminRouter = [
    {
        path: "/admin",
        component: () =>
            import("../layouts/dynamic/dynamic-layout.vue"),
        children: [
            {
                path: '',
                name: 'main',
                component: () => import("../views/admin/admin-home.vue")
            },
            {
                path: 'header/edit/:id',
                name: 'header-edit',
                component: () => import("../views/admin/main-header/edit/edit.vue")

            },
            {
                path: 'header/add',
                name: 'header-add',
                component: () => import("../views/admin/main-header/add/add.vue")
            },
            {
                path: 'header',
                name: 'header-list',
                component: () => import("../views/admin/main-header/list/list.vue")
            }

        ]
    }
];
const routes = [
    ...customerRoutes,
    ...adminRouter
]


// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router