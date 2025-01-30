export const Loading = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-dashed border-[#8f4df2]"></div>
      <h2 className="Label_M mt-4 text-[#ffffff]">{title}</h2>
      <p className="Caption_normal_M text-[#adadad]">{subtitle}</p>
    </div>
  );
};
