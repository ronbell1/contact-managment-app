import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
      >
        {/* Left Section: User Info */}
        <div className="flex gap-3 items-center">
          <HiOutlineUserCircle className="text-4xl text-gray-600" />
          <div>
            <h2 className="text-xl font-medium text-gray-800">{contact.name}</h2>
            <p className="text-sm text-gray-500">{contact.email}</p>
          </div>
        </div>

        {/* Right Section: Action Icons */}
        <div className="flex gap-3 text-gray-600 text-3xl">
          <RiEditCircleLine
            onClick={onOpen}
            className="cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer hover:text-red-500 transition duration-200 ease-in-out"
          />
        </div>
      </div>

      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
