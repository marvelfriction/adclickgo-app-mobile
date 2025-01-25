// import { useAuth } from "../services/useAuth";

// export default function middleware(request) {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated && request.pathname !== "/login") {
//     return { redirect: "/login" };
//   }

//   if (isAuthenticated && request.pathname === "/login") {
//     return { redirect: "/home" };
//   }
// }
