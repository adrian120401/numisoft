interface LayoutProps {
  children: React.ReactNode;
}

const SubPageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default SubPageLayout;