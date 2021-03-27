function collision (K1,K2)
{
  if(K1.x-K2.x<=K1.width/2+K2.width/2 && K2.x-K1.x<=K1.width/2+K2.width/2 && 
    K1.y-K2.y<=K1.height/2+K2.height/2 && K2.y-K1.y<=K1.height/2+K2.height/2)
   {
    return true
   }
   else{return false}
}