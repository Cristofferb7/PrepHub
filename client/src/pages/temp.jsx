<div className="row">
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          href="/me"
        >
          <i className="bi bi-menu-button-wide"></i>
          <span>Profile</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <i className="bi bi-grid"></i>
          <span>List</span>
        </a>
      </li>
      <li className="nav-item">
        {/* div to show the map */}

        <a className="nav-link collapsed" onClick={getlocation}>
          <i className="bi bi-grid"></i>
          <span>Show Position</span>
        </a>
      </li>
    </ul>
  </aside>
  <div className="col-md-5 ml-auto">
    <div
      className="col-12 col-md-8 mb-3 p-3"
      style={{ backgroundColor: "#edede9", opacity: "0.8" }}
    >
      <CheckListForm />
    </div>
    <div id="demo" style={styles.map} className="box col-5">
      <p>Click the button to get your coordinates.</p>
    </div>
    <div className="col-12 col-md-8 mb-3">
      {/* {loading ? (
      <div>Loading...</div>
    ) : (
      <Checklist
        checkLists={checkLists}
        title="Here are your checklists!"
      />
    )} */}
    </div>
  </div>
</div>;
