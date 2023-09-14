import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Checklist from "../components/Checklist";

import { QUERY_USER } from "../utils/queries";

import CheckListForm from "../components/CheckListForm";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() &&
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="d-flex mainContainer">
      <div className="left">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item btn w-100 m-1">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item btn w-100 m-1">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="bi bi-grid"></i>
              <span>Profile</span>
            </a>
          </li>
          {/* <li className="nav-item btn w-100 m-1">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-grid"></i>
              <span>List</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="right">
        <div
          className="mb-3 p-3"
          style={{ backgroundColor: "#edede9", opacity: "0.8" }}
        >
          <CheckListForm />
        </div>

        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Checklist
              checkLists={user?.checkLists}
              user={user}
              title="Here are your checklists!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
