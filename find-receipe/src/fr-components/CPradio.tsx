interface CPradioProps {
  title?: string;
  groupName:string;
  fields: string[];
  onChange: (e: any) => void;
  errorMsg?: string;
}


const CPradio = (props: CPradioProps) => {
  const { title,groupName, fields, onChange, errorMsg } = props;
  return (
    <div>
      {title ?? <label>{title}</label>}
      {fields.map((field) => (
        <>
        <input type="radio" name={groupName} value={field} onChange={(e)=>onChange(e.target.value)} />
        <label>{field}</label>
        </>
      ))}
      <label style={{ visibility: errorMsg ? "visible" : "hidden" }}>
        {errorMsg}
      </label>
    </div>
  );
};

export default CPradio;
