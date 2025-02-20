interface CPdropdownProps {
    title?: string;
    fields: string[];
    onChange: (selectedOption:string) => void;
    errorMsg?: string;
  }
  
  
  const CPdropdown = (props: CPdropdownProps) => {
    const { title, fields, onChange, errorMsg } = props;
    return (
      <div>
        {title ?? <label>{title}</label>}
        <select onChange={(e)=>onChange(e.target.value)}>
        {fields.map((field) => (
          <option value={field}>{field}</option>
        ))}
        </select>
        <label style={{ visibility: errorMsg ? "visible" : "hidden" }}>
          {errorMsg}
        </label>
      </div>
    );
  };
  
  export default CPdropdown;
  