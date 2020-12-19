import { lazy } from "react";
import AdminDashBroad from "../layouts/Admin-DashBroad";
import Clientlayout from "../layouts/Client";
import Errorlayout from "../layouts/Error";
import Cvlayout from "../layouts/Cv";
import CandidateDashBroad from "../layouts/Candidate-DashBroad";
import EmployerDashbroad from "../layouts/Employer-DashBroad";

export const publicRoutes = [
  {
    layout: Clientlayout,
    subroutes: [
      {
        key: "home",
        path: "/",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/HomePages")),
      },
      {
        key: "recruitments",
        path: "/recruitments",
        exact: true,
        component: lazy(() =>
          import("../app/Containers/Client/RecruitmentPages")
        ),
      },
      {
        key: "news",
        path: "/news",
        exact: true,
        component: lazy(() =>
          import("../app/Containers/Client/News")
        ),
      },
      {
        key: "login",
        path: "/login",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/LoginPages")),
      },
      {
        key: "signup",
        path: "/signup",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/SignupPages")),
      },
      {
        key: "candidate",
        path: "/candidate",
        exact: true,
        component: lazy(() =>
          import("../app/Containers/Client/CandidatePages")
        ),
      },
      {
        key: "candidate_id",
        path: "/candidate/:id",
        exact: true,
        component: lazy(() =>
          import(
            "../app/Containers/Client/CandidatePages/component/CandidatesDetail"
          )
        ),
      },
      {
        key: "employer",
        path: "/employer",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/EmployerPages")),
      },
      {
        key: "employer_id",
        path: "/employer/:id",
        exact: true,
        component: lazy(() =>
          import(
            "../app/Containers/Client/EmployerPages/component/EmployerDetail"
          )
        ),
      },
      {
        key: "recruitment_id",
        path: "/recruitments/:id",
        exact: true,
        component: lazy(() =>
          import(
            "../app/Containers/Client/RecruitmentPages/component/RecruitmentDetail"
          )
        ),
      },
    ],
  },
  {
    layout: Errorlayout,
    subroutes: [
      {
        key: "not-found-404",
        path: "/not-found-404",
        exact: true,
        component: lazy(() => import("../app/Containers/Error")),
      },
    ],
  },
];

export const privateRouteEmployer = [
  {
    layout: EmployerDashbroad,
    subroutes: [
      {
        key: "Main-DB",
        path: "/employer-dashbroad",
        exact: true,
        component: lazy(() =>
          import("../app/Containers/Client/EmployerDashbroad")
        ),
      },
      {
        key: "List-Job_-db",
        path: "/employer-dashbroad/list-job",
        exact: true,
        component: lazy(() =>
          import(
            "../app/Containers/Client/EmployerDashbroad/component/ListJobEmployer"
          )
        ),
      },
      {
        key: "list-candidate",
        path: "/employer-dashbroad/list-candidate",
        exact: true,
        component: lazy(() =>
          import(
            "../app/Containers/Client/EmployerDashbroad/component/ListCandidate"
          )
        ),
      },
      {
        key: "add-recruitment",
        path: "/employer-dashbroad/add-recruitment",
        exact: true,
        component: lazy(() =>
          import("../app/Containers/Client/EmployerDashbroad/component/AddJob")
        ),
      },
      {
        key: "edit-recruitment",
        path: "/employer-dashbroad/list-job/edit/:id",
        exact: true,
        component: lazy(() =>
          import("../app/Containers/Client/EmployerDashbroad/component/EditJob")
        ),
      },
    ],
  },
];

export const privateRouteCandidate = [
  {
    layout: CandidateDashBroad,
    subroutes: [
      {
        key: "candidate-dashbroad",
        path: "/candidate-dashbroad",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/CandidateDashbroad")),
      },
      {
        key: "list-job-apply",
        path: "/candidate-dashbroad/list-job",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/CandidateDashbroad/component/ListJobApply")),
      },
      {
        key: "list-cv",
        path: "/candidate-dashbroad/list-cv",
        exact: true,
        component: lazy(() => import("../app/Containers/Client/CandidateDashbroad/component/ListCv")),
      },
    ],
  },
];

export const privateRouteCv = [
  {
    layout: Cvlayout,
    subroutes: [
      {
        key: "cv",
        path: "/cv",
        exact: true,
        component: lazy(() => import("../app/Containers/CV")),
      }
    ],
  },
];

export const privateRouteAdmin = [
  {
    layout: AdminDashBroad,
    subroutes: [
      {
        key: "admin-dashboard",
        path: "/admin-dashboard",
        exact: true,
        component: lazy(() => import("../app/Containers/Admin/component/Dashboard")),
      },
      {
        key: "list-employer",
        path: "/admin-dashboard/list-employer",
        exact: true,
        component: lazy(() => import("../app/Containers/Admin/component/ListEmployer")),
      },
      {
        key: "list-recruitment",
        path: "/admin-dashbroad/list-recruitment",
        exact: true,
        component: lazy(() => import("../app/Containers/Admin/component/ListRecruitment")),
      },
      {
        key: "list-candidate",
        path: "/admin-dashbroad/list-candidate",
        exact: true,
        component: lazy(() => import("../app/Containers/Admin/component/ListCandidate")),
      },
    ],
  },
];
