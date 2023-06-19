import React from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from "../components/Menu";

export const Single = () => {
  return (
    <div className="flex gap-6">
      <div className="pl-10 mb-10 pt-5 w-[70%]">
        <div className="h-[400px] w-full">
        <img
          className="w-[100%] h-[100%]"
          src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
        </div>
        <div className="flex pt-10 gap-6 drop-shadow-xl border-b-2 pb-2">
          <img
            className="w-14 h-14 rounded-full"
            src="https://awbi.org/wp-content/uploads/2023/04/kim.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">John</h1>
            <p>3 months ago</p>
          </div>
          <div className="flex justify-center items-center gap-5"> 
            <BorderColorIcon className="hover:text-blue-500"/>
            <DeleteIcon className="hover:text-red-500"/>
          </div>
        </div>
        <div className="pt-10 flex flex-col gap-10">
        <h1 className="font-bold text-3xl leading-normal border-b-2 pb-2 drop-shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="leading-8 text-justify indent-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae mollitia blanditiis animi magnam consequuntur et vero nobis commodi perspiciatis, numquam amet tempore accusantium odio. Corporis delectus voluptas quas, debitis architecto sint asperiores, libero officiis dolore qui reprehenderit molestiae soluta ea exercitationem quia doloribus veritatis illum nulla obcaecati assumenda nostrum numquam eius quisquam. Explicabo quia, natus quod aspernatur temporibus obcaecati quasi, blanditiis voluptates laborum doloribus culpa cupiditate maxime delectus nesciunt illo! Eveniet dolor quisquam optio culpa odio vero, reprehenderit, pariatur laudantium explicabo magni incidunt molestiae! Est iure recusandae ratione minima libero. Molestiae nulla repudiandae deleniti omnis praesentium doloribus, animi ducimus beatae architecto at quod aspernatur magnam quasi unde voluptatem aperiam delectus placeat, sunt nemo. Officia hic reiciendis consequuntur quae saepe sit eligendi exercitationem expedita quasi minus sunt qui placeat, dolores voluptatem molestiae. Vero tempore quisquam animi sit dicta mollitia omnis nemo ipsa at debitis porro excepturi consequuntur est, ipsum corporis quae, necessitatibus impedit provident aut voluptate adipisci! Eveniet, delectus odio. Dicta a magni minima aspernatur nobis, provident tempora. Iure nemo, numquam quas eos ullam accusantium saepe et pariatur officia. Rem molestias minus ea, neque perferendis, fugit rerum totam praesentium placeat odit impedit ullam, repellat suscipit natus mollitia consectetur voluptas hic.</p>
        </div>
      </div>
      <Menu/>
    </div>
  );
};
export default Single;
