import Image from 'next/image';
import construction from "@/assets/image/Under construction-cuate.svg"; // Adjust the path as needed

const ImagePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image 
        src={construction} 
        alt="Under construction" // Provide an alt description for accessibility
        width={500} // Adjust width as needed
        height={500} // Adjust height as needed
        className="rounded-lg" // Optional: add styles such as rounded corners
      />
      <p className="mt-4 text-lg font-semibold">Under Maintenance</p>
      <p className="mt-4 text-center">
        We apologize for any inconvenience this may cause. Our website is currently under maintenance. If you encounter any issues, please feel free to reach out to us via 
        <a href="https://www.linkedin.com/company/facio-contently-writers/posts/?feedView=all" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
        or 
        <a href="mailto:Info@contententlywriters.com" className="text-blue-500 underline"> email </a>.
      </p>
    </div>
  );
};

export default ImagePage;
