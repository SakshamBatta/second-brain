export const Input = ({
  placeholder,
  reference,
}: {
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference: any;
}) => {
  return (
    <div>
      <input
        ref={reference}
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded m-2"
      />
    </div>
  );
};
