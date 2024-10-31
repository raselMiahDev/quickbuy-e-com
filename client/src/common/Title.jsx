
const Title = ({title,description}) => {
    return (
        <div className="text-center my-8 p-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{title}</h2>
        <hr className="border-t-2 border-gray-800 w-16 mx-auto my-4" />
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    );
};

export default Title;