import React, { useState, useRef, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  CustomRule,
  EmailRule,
  GroupItem,
  EmptyItem,
} from "devextreme-react/form";
import notify from "devextreme/ui/notify";
import LoadIndicator from "devextreme-react/load-indicator";
import { createAccount } from "../../api/auth";
import "./create-account-form.scss";
import { Group } from "devextreme-react/diagram";

export default function (props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const data = formData.current;

      data.roleId = 1;
      data.active = true;
      data.FkAdressNavigation = {
        fkCity: data.fkCity,
        nbhood: data.nbhood,
        street: data.street,
        num: data.num,
        complement: data.complement,
        postalcode: data.postalcode,
      };
      data.FkContactNavigation = {
        name: data.name,
        fone: data.fone,
        nameAlt: data.nameAlt,
        foneAlt: data.foneAlt,
      };
      console.log(data);
      setLoading(true);

      const result = await createAccount(data);
      setLoading(false);

      if (result.isOk) {
        history.push("/login");
      } else {
        notify(result.message, "error", 2000);
      }
    },
    [history]
  );

  const confirmPassword = useCallback(
    ({ value }) => value === formData.current.password,
    []
  );

  return (
    <form className={"create-account-form"} onSubmit={onSubmit}>
      <Form
        className={"content-block dx-card responsive-paddings"}
        formData={formData.current}
        disabled={loading}
        colCount={3}
        width={1000}
        minColWidth={700}
      >
        <GroupItem caption="Personal Information">
          <Item
            dataField={"name"}
            editorType={"dxTextBox"}
            editorOptions={nameEditorOptions}
          >
            <RequiredRule message="Name is required" />

            <Label visible={false} />
          </Item>
          <Item
            dataField={"email"}
            editorType={"dxTextBox"}
            editorOptions={emailEditorOptions}
          >
            <RequiredRule message="Email is required" />
            <EmailRule message="Email is invalid" />
            <Label visible={false} />
          </Item>
          <Item
            dataField={"birthdate"}
            editorType={"dxDateBox"}
            editorOptions={birthdateEditorOptions}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"password"}
            editorType={"dxTextBox"}
            editorOptions={passwordEditorOptions}
          >
            <RequiredRule message="Password is required" />
            <Label visible={false} />
          </Item>
          <Item
            dataField={"confirmedPassword"}
            editorType={"dxTextBox"}
            editorOptions={confirmedPasswordEditorOptions}
          >
            <RequiredRule message="Password is required" />
            <CustomRule
              message={"Passwords do not match"}
              validationCallback={confirmPassword}
            />
            <Label visible={false} />
          </Item>
        </GroupItem>

        <GroupItem caption="Contact Information" colCount={1}>
          <Item
            dataField={"contactname"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Main contact name",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"fone"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Main contact number",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"nameAlt"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Secundary contact name",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"foneAlt"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Secundary contact number",
            }}
          >
            <Label visible={false} />
          </Item>
        </GroupItem>
        <GroupItem caption="Address Information" colCount={1}>
          <Item
            dataField={"fkCity"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "City ID",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"nbhood"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Neighborhood",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"street"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Street",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"num"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "House number",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"complement"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Complement",
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"postalcode"}
            editorType={"dxTextBox"}
            editorOptions={{
              stylingMode: "filled",
              placeholder: "Postal Code",
            }}
          >
            <Label visible={false} />
          </Item>
        </GroupItem>
        {/* <Item>
          <div className='policy-info'>
            By creating an account, you agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
          </div>
        </Item> */}
        <EmptyItem />
        <ButtonItem>
          <ButtonOptions
            width={"100%"}
            type={"default"}
            useSubmitBehavior={true}
          >
            <span className="dx-button-text">
              {loading ? (
                <LoadIndicator width={"24px"} height={"24px"} visible={true} />
              ) : (
                "Create a new account"
              )}
            </span>
          </ButtonOptions>
        </ButtonItem>
        <EmptyItem />
        <EmptyItem />
        <Item>
          <div className={"login-link"}>
            Have an account? <Link to={"/login"}>Sign In</Link>
          </div>
        </Item>
      </Form>
    </form>
  );
}

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "Email",
  mode: "email",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Password",
  mode: "password",
};
const nameEditorOptions = {
  stylingMode: "filled",
  placeholder: "Full name",
};
const confirmedPasswordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Confirm Password",
  mode: "password",
};
const birthdateEditorOptions = {
  stylingMode: "filled",
  placeholder: "Birthdate",
};
