import React, { useState, useEffect } from "react";
import "./profile.scss";
import Form from "devextreme-react/form";
import { api } from "../../api/api";

export default () => {
  const [user, setUser] = useState();
  const [notes, setNotes] = useState(
    "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts."
  );

  useEffect(() => {
    async function loadData() {
      await api
        .get(`/users/3`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {});
    }
    loadData();
  }, []);

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Profile</h2>

      <div className={"content-block dx-card responsive-paddings"}>
        <div className={"form-avatar"}>
          <img
            alt={""}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${"images/employees/06.png"}`}
          />
        </div>
        <span>Gabriel Fernandes</span>
      </div>

      <div className={"content-block dx-card responsive-paddings"}>
        <Form
          id={"form"}
          defaultFormData={user}
          // onFieldDataChanged={(e) =>
          //   e.dataField === "Notes" && setNotes(e.value)
          // }
          labelLocation={"top"}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
};

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
};
