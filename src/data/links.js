import Movies from "../components/movie/Movies";
import NotFound from "../components/base/NotFound";
import MovieDetail from "../components/movie/MovieDetail";
import Search from "../components/Search";

const links = [
  {
    link: "/search",
    title: "Search",
    component: Search,
    isExact: false,
    isLink: false
  },
  {
    link: "/",
    title: "Explore Movies",
    component: Movies,
    isExact: true,
    isLink: true
  },
  {
    link: "/movie/:id",
    title: "Movies",
    component: MovieDetail,
    isExact: false,
    isLink: false
  },

  { link: "", title: "404", component: NotFound, isExact: false, isLink: false }
];

export default links;
