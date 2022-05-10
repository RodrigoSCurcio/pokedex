import { Button } from "../Button";
import { PaginationStyled } from "./style";

type PaginationType = {
  Offset: (direction: string) => void;
  previous?: string;
  count: number;
  next?: string;
  page: any;
};

export const Pagination = ({
  Offset,
  previous,
  count,
  next,
  page,
}: PaginationType) => {
  return (
    <PaginationStyled className="col-sm-12 d-flex justify-content-center mb-2">
      <div className="pagination col-sm-6">
        <div className="col-sm-2 d-flex justify-content-end">
          <Button
            type="button"
            onClick={() => Offset("backwards")}
            disabled={!previous}
          >
            {"<"}
          </Button>
        </div>
        <div className="col-sm-2 text-center">
          <strong className="paginationInfos">
            Página {page + 1} de {Math.ceil(count / 10)}
          </strong>
        </div>
        <div className="col-sm-2">
          <Button
            type="button"
            onClick={() => Offset("foward")}
            disabled={!next}
          >
            {">"}
          </Button>
        </div>
      </div>
    </PaginationStyled>
  );
};
