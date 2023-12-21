import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
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
          <label>Title</label>
          <input type="text" name="title" placeholder="iphone" />
          <label>price</label>
          <input type="number" name="price" placeholder="number" />
          <label>stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>color</label>
          <input type="text" name="color" placeholder="red" />
          <label>size</label>
          <input type="text" name="size" placeholder="L" />
          <label htmlFor="">Cat</label>
          <select name="cat" id="cat">
            <option value="general">Choose cat</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="description"
          ></textarea>
        </form>
      </div>
    </div>
  );
};
export default SingleProductPage;
