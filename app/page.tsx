/**
 * sever component(Server-side rendering) by default 
 * ( no interactivity )
 * 
 * "use client " => used to make 
 * clinet componet 
 */

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-rose-500
       font-semibold">
          Hello Live Wave
      </p>

      <Button className="mt-5">
        hello' bahut 
      </Button>
    </div>
    
  );
}
