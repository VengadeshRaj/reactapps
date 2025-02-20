interface CPtextBoxProps {
  title?: string;
  value: string;
  name?: string;
  onChange?: (e:any) => void;
  errorMsg?: string;
}

const CPtextBox = (props: CPtextBoxProps) => {
  const { title, value,name, onChange, errorMsg } = props;
  return (
    <div>
      {title ?? <label>{title}</label>}
      <div>
        <input type="text" name={name} value={value} onChange={onChange} />
      </div>
        <label style={{ visibility:errorMsg? "visible": "hidden" }}>{errorMsg}</label>
    </div>
  );
};

export default CPtextBox;
