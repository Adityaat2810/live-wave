/**
 * sever component(Server-side rendering) by default 
 * ( no interactivity )
 * 
 * server componet has => 
 *  backend behaviour 
 *  database access 
 *  server cache 
 *  streaming 
 *  partial rendeing 
 *  Seo 
 * initial page loss 
 * 
 * 
 * 
 * "use client " => used to make 
 * clinet componet 
 *   ->frontend behaivoiur 
 *   ->use effect 
 *   ->on click 
 * 
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
