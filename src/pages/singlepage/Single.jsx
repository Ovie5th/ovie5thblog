import Post from "../../post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";
import Singlepost from "../../components/Singlepost/Singlepost";

export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
}
