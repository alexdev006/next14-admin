import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="email" name="email" required />
        <input type="text" placeholder="password" name="password" required />
        <input type="text" placeholder="phone" name="phone" required />
        <select name="IsAdmin" id="isAdmin">
          <option value={false}>Is admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false}>Is active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="adress"
          id="adress"
          rows="16"
          placeholder="Adress"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddUserPage;
