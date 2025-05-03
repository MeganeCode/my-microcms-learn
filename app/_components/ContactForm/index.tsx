"use client";

import { createContactDate } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactDate, initialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label htmlFor="lastname" className={styles.label}>
            姓
          </label>
          <input
            type="text"
            className={styles.textfield}
            id="lastname"
            name="lastname"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="firstname" className={styles.label}>
            名
          </label>
          <input
            type="text"
            className={styles.textfield}
            id="firstname"
            name="firstname"
          />
        </div>
      </div>

      <div className={styles.item}>
        <label htmlFor="company" className={styles.label}>
          会社名
        </label>
        <input
          type="text"
          className={styles.textfield}
          id="company"
          name="company"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="email" className={styles.label}>
          メールアドレス
        </label>
        <input
          type="text"
          className={styles.textfield}
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="message" className={styles.label}>
          メッセージ
        </label>
        <input
          type="text"
          className={styles.textarea}
          id="message"
          name="message"
        />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
