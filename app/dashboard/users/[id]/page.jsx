import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        ALex G
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>UserName</label>
          <input type="text" name="username" placeholder="Alex" />
          <label>email</label>
          <input type="email" name="email" placeholder="AlexG@gmail.com" />
          <label>password</label>
          <input type="password" name="password" placeholder="Alex" />
          <label>phone</label>
          <input type="text" name="phone" placeholder="+33 0678...." />
          <label>adress</label>
          <textarea type="text" name="adress" placeholder="220 rue ...." />
          <label htmlFor="">Is Admin ? </label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
          <label htmlFor="">Is active ? </label>
          <select name="isActive" id="isActive">
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
        </form>
      </div>
    </div>
  );
};
export default SingleUserPage;
