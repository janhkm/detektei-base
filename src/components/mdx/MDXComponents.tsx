import Link from "next/link";
import { Lightbulb, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

// KeyTakeaways Komponente - akzeptiert children als JSX
interface KeyTakeawaysProps {
  children: ReactNode;
}

export function KeyTakeaways({ children }: KeyTakeawaysProps) {
  return (
    <div className="my-8 rounded-xl bg-accent-50 border border-accent-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
          <Lightbulb className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-lg font-display font-bold text-primary-900">
          Das Wichtigste im Überblick
        </h2>
      </div>
      <div className="prose prose-primary max-w-none [&>ul]:space-y-2 [&>ul]:list-none [&>ul]:pl-0 [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:gap-3 [&>ul>li]:text-primary-700 [&>ul>li]:before:content-['•'] [&>ul>li]:before:text-accent-600 [&>ul>li]:before:font-bold [&>ul>li]:before:mt-0.5">
        {children}
      </div>
    </div>
  );
}

// Styled Table Components
function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-primary-200 border border-primary-200 rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  );
}

function TableHead({ children }: { children: ReactNode }) {
  return <thead className="bg-primary-50">{children}</thead>;
}

function TableBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-primary-100 bg-white">{children}</tbody>;
}

function TableRow({ children }: { children: ReactNode }) {
  return <tr className="hover:bg-primary-50/50 transition-colors">{children}</tr>;
}

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <th className="px-4 py-3 text-left text-sm font-display font-bold text-primary-900">
      {children}
    </th>
  );
}

function TableCell({ children }: { children: ReactNode }) {
  return (
    <td className="px-4 py-3 text-sm text-primary-700">
      {children}
    </td>
  );
}

// Custom Link component for internal/external links
function CustomLink({ href, children, ...props }: { href?: string; children: ReactNode }) {
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
  
  if (isInternal) {
    return (
      <Link 
        href={href} 
        className="text-accent-600 hover:text-accent-700 underline decoration-accent-300 hover:decoration-accent-500 transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-accent-600 hover:text-accent-700 underline decoration-accent-300 hover:decoration-accent-500 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}

// Headings with proper styling
function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-display font-bold text-primary-900 mt-10 mb-4 scroll-mt-24">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl font-display font-semibold text-primary-900 mt-8 mb-3 scroll-mt-24">
      {children}
    </h3>
  );
}

function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-lg font-display font-semibold text-primary-800 mt-6 mb-2">
      {children}
    </h4>
  );
}

// Paragraph
function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-primary-600 mb-4 leading-relaxed">
      {children}
    </p>
  );
}

// Lists
function UnorderedList({ children }: { children: ReactNode }) {
  return (
    <ul className="my-4 space-y-2 text-primary-600">
      {children}
    </ul>
  );
}

function OrderedList({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 space-y-2 text-primary-600 list-decimal list-inside">
      {children}
    </ol>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-accent-500 mt-1">•</span>
      <span>{children}</span>
    </li>
  );
}

// Blockquote
function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-accent-500 bg-accent-50 pl-6 py-4 pr-4 rounded-r-lg italic text-primary-700">
      {children}
    </blockquote>
  );
}

// Code blocks
function Code({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 bg-primary-100 rounded text-sm font-mono text-primary-800">
      {children}
    </code>
  );
}

function Pre({ children }: { children: ReactNode }) {
  return (
    <pre className="my-6 p-4 bg-primary-900 rounded-lg overflow-x-auto text-primary-100 text-sm">
      {children}
    </pre>
  );
}

// Strong and Em
function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-primary-900">{children}</strong>;
}

function Em({ children }: { children: ReactNode }) {
  return <em className="italic text-primary-700">{children}</em>;
}

// Horizontal Rule
function Hr() {
  return <hr className="my-8 border-t border-primary-200" />;
}

// Checkbox List Item (for GFM task lists)
function CheckboxListItem({ checked, children }: { checked?: boolean; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 my-2">
      {checked ? (
        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
      ) : (
        <div className="h-5 w-5 border-2 border-primary-300 rounded mt-0.5 flex-shrink-0" />
      )}
      <span className={checked ? "text-primary-500 line-through" : "text-primary-700"}>
        {children}
      </span>
    </li>
  );
}

// Alert/Warning Box
interface AlertProps {
  type?: "info" | "warning" | "success" | "error";
  children: ReactNode;
}

export function Alert({ type = "info", children }: AlertProps) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  const icons = {
    info: <AlertTriangle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />,
  };

  return (
    <div className={`my-6 p-4 rounded-lg border ${styles[type]} flex gap-3`}>
      <span className="flex-shrink-0 mt-0.5">{icons[type]}</span>
      <div className="prose prose-sm max-w-none">{children}</div>
    </div>
  );
}

// Export all MDX components
export const mdxComponents = {
  // Custom components
  KeyTakeaways,
  Alert,
  
  // HTML elements mapping
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: CustomLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  strong: Strong,
  em: Em,
  hr: Hr,
  
  // Table components
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
};
