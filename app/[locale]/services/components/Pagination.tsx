interface PaginationProps {
  setPaginate: (value: number) => void;
  currentPage: number;
  pageSize: number;
  itemsLength: number;
}

export default function Pagination({
  setPaginate,
  currentPage,
  pageSize,
  itemsLength,
}: PaginationProps) {
  const totalPages = Math.ceil(itemsLength / pageSize);

  const pagesToShow = [];
  const lastPage = totalPages;

  // Always show: 1, 2, 3
  for (let i = 1; i <= Math.min(3, totalPages); i++) {
    pagesToShow.push(i);
  }

  // Add ellipsis if pages are many
  if (totalPages > 4 && currentPage > 3) {
    pagesToShow.push("ellipsis");
  }

  // Always show last page
  if (totalPages > 3) {
    pagesToShow.push(lastPage);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="flex justify-center mt-6 gap-2">
        {/* Previous */}
        <li>
          <button
            onClick={() => currentPage > 1 && setPaginate(currentPage - 1)}
            className="px-2 py-1 rounded text-sm hover:text-primary/90"
          >
            ‹
          </button>
        </li>

        {pagesToShow.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <li key={index}>
                <div className="px-3 py-1.5 border rounded-md">
                  ...
                </div>
              </li>
            );
          }

          return (
            <li key={page}>
              <button
                onClick={() => setPaginate(page as number)}
                className={`px-3 py-1.5 text-sm relative hover:text-primary/90
                  ${page === currentPage ? "text-primary" : ""}
                `}
              >
                {page}

                {page === currentPage && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 block h-[3px] w-4 rounded bg-primary"></span>
                )}
              </button>
            </li>
          );
        })}

        {/* Next */}
        <li>
          <button
            onClick={() =>
              currentPage < totalPages && setPaginate(currentPage + 1)
            }
            className="px-2 py-1 rounded text-sm hover:text-primary/90"
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  );
}
