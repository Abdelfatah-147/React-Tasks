import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6">

      <h1 className="text-8xl font-bold">

        404

      </h1>

      <p className="text-xl">

        Page Not Found

      </p>

      <Link to="/">

        <Button>

          Go Home

        </Button>

      </Link>

    </div>
  );
}

export default NotFound;