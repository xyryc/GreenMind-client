import { MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";
import { RiSeedlingLine } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";

const SellerMenu = () => {
  return (
    <>
      <MenuItem icon={RiSeedlingLine} label="Add Plant" address="add-plant" />

      <MenuItem
        icon={MdOutlineInventory}
        label="My Inventory"
        address="my-inventory"
      />

      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Orders"
        address="manage-orders"
      />
    </>
  );
};

export default SellerMenu;
