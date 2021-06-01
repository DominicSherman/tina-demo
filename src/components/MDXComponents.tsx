export const MDXComponents = {
  wrapper: (props) => (
    <div className="prose">
      <div className="p-8 w-screen flex flex-col items-center">
        <div className="max-w-5xl">{props.children}</div>
      </div>
    </div>
  ),
};
