import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NameEditForm from "../components/NameEditForm";
import { usePostUserProfileQuery } from "../slices/api";
import { show, toggle } from "../slices/nameEditor";

export default function Profile() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { data, error, isLoading } = usePostUserProfileQuery();

  const nameEditorIsVisible = useSelector((state) => state.nameEditor.visible);
  const dispatch = useDispatch();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        {nameEditorIsVisible ? (
          <>
            <h1>Welcome back</h1>
            <NameEditForm />
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {data ? data.body.firstName + " " + data.body.lastName : ""}
            </h1>
            <button className="edit-button" onClick={() => dispatch(toggle())}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
