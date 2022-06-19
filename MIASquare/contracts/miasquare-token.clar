;; Implement the `ft-trait` trait defined in the `ft-trait` contract
;; https://github.com/hstove/stacks-fungible-token
(impl-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait.ft-trait)


;; miasquare-token
;; Token used for Miami Square platform
(define-constant contract-creator tx-sender)

(define-fungible-token miasquare-token)

;; Mint developer tokens
(ft-mint? miasquare-token u10000 contract-creator)
(ft-mint? miasquare-token u10000 'ST39AX1DVGYXZF65MWTDF1T1RPSV5MN5NKRNMDSSV) ;; boris


;; get the token balance of owner
(define-read-only (get-balance (owner principal))
  (begin
    (ok (ft-get-balance miasquare-token owner))))

;; returns the total number of tokens
(define-read-only (get-total-supply)
  (ok (ft-get-supply miasquare-token)))

;; returns the token name
(define-read-only (get-name)
  (ok "MIASquare Token"))

;; the symbol or "ticker" for this token
(define-read-only (get-symbol)
  (ok "MIASQUARE"))

;; the number of decimals used
(define-read-only (get-decimals)
  (ok u4))

;; Transfers tokens to a recipient
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (if (is-eq tx-sender sender)
    (begin
      (try! (ft-transfer? miasquare-token amount sender recipient))
      (print memo)
      (ok true)
    )
    (err u4)))

(define-public (get-token-uri)
  (ok none))

(define-public (gift-tokens (recipient principal))
  (begin
    (asserts! (is-eq tx-sender recipient) (err u0))
    (ft-mint? miasquare-token u1 recipient)
  )
)