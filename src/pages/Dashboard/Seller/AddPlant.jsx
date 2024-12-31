import { Helmet } from "react-helmet-async";
import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const AddPlant = () => {
  const { user } = useAuth();
  const [uploadButtonText, setUploadButtonText] = useState({
    name: "Upload Image",
  });
  const [loading, setLoading] = useState(false);

  // handle format submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const image = form.image.files[0];
    const image_url = await imageUpload(image);

    // seller info
    const seller = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    // create plant data object
    const plantData = {
      name,
      description,
      category,
      price,
      quantity,
      image: image_url,
      seller,
    };

    console.table(plantData);

    // save plant in db
    try {
      // post req
    } catch (err) {
      console.log(err);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddPlantForm
        handleSubmit={handleSubmit}
        uploadButtonText={uploadButtonText}
        setUploadButtonText={setUploadButtonText}
        loading={loading}
      />
    </div>
  );
};

export default AddPlant;
