interface LayoutProps {
  children: React.ReactNode;
}

const SubPageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default SubPageLayout;