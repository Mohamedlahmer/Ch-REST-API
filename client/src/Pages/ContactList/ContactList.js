import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../Components/Contact/Contact";
import { getContacts } from "../../JS/actions/contact";
import { Spinner } from "react-bootstrap";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactReducer.contacList);
  const loadContact = useSelector((state) => state.contactReducer.loadContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {loadContact ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        contactList.map((el) => <Contact contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default ContactList;
